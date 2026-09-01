#!/usr/bin/env python3
"""Extract official AFAQ wordmark and icon PNGs from the client AFAQ LOGO.ai brand sheet."""

from __future__ import annotations

import base64
import email
import json
import os
from email import policy
from pathlib import Path

import fitz  # pymupdf
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "afaq-logo"
AI_PATH = OUT_DIR / "AFAQ LOGO.ai"
WORDMARK_OUT = OUT_DIR / "afaq-wordmark-official.png"
ICON_OUT = OUT_DIR / "afaq-icon-official.png"


def navy_mask(r: np.ndarray, g: np.ndarray, b: np.ndarray) -> np.ndarray:
    return (r < 80) & (g < 80) & (b > 60) & (b < 120)


def crop_navy_from_sheet(arr: np.ndarray, y1: int, y2: int, x1: int, x2: int, pad: int = 8) -> Image.Image:
    region = arr[y1:y2, x1:x2].copy()
    r, g, b = region[:, :, 0], region[:, :, 1], region[:, :, 2]
    mask = navy_mask(r, g, b)
    ys, xs = np.where(mask)
    if len(xs) == 0:
        raise ValueError(f"No navy pixels in crop region y={y1}-{y2}, x={x1}-{x2}")

    top, left = max(0, ys.min() - pad), max(0, xs.min() - pad)
    bottom, right = min(region.shape[0], ys.max() + pad + 1), min(region.shape[1], xs.max() + pad + 1)
    cropped = region[top:bottom, left:right]
    cr, cg, cb = cropped[:, :, 0], cropped[:, :, 1], cropped[:, :, 2]
    alpha = np.where(navy_mask(cr, cg, cb), 255, 0).astype(np.uint8)
    return Image.fromarray(np.dstack([cr, cg, cb, alpha]))


def ensure_ai_file() -> None:
    if AI_PATH.exists():
        return

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    raise FileNotFoundError(
        f"Missing {AI_PATH}. Place the client AFAQ LOGO.ai file in afaq-logo/ before running.",
    )


def render_brand_sheet() -> np.ndarray:
    doc = fitz.open(str(AI_PATH))
    page = doc[0]
    pix = page.get_pixmap(matrix=fitz.Matrix(3, 3), alpha=True)
    sheet_path = OUT_DIR / "brand-sheet.png"
    pix.save(str(sheet_path))
    return np.array(Image.open(sheet_path).convert("RGBA"))


def main() -> None:
    ensure_ai_file()
    arr = render_brand_sheet()

    # Company Logo row: wordmark + "A F Λ Q H O L D I N G S" subline
    wordmark = crop_navy_from_sheet(arr, 590, 820, 1280, 1910, pad=12)
    wordmark.save(WORDMARK_OUT)

    # Icon Branding row: rounded-square icon mark only
    icon = crop_navy_from_sheet(arr, 1715, 1865, 1290, 1455, pad=10)
    icon.save(ICON_OUT)

    print(f"Saved {WORDMARK_OUT} ({wordmark.size[0]}x{wordmark.size[1]})")
    print(f"Saved {ICON_OUT} ({icon.size[0]}x{icon.size[1]})")


if __name__ == "__main__":
    main()
