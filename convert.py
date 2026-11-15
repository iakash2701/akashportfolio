import fitz
import os

files = {
    "Oracle.pdf": "oracle.jpg",
    "REVERB RUSH_50.pdf": "reverb-rush.jpg",
    "Wadhwani Foundation Certificate - 68334b89bff6ce8d0455ad31.pdf": "wadhwani-1.jpg",
    "Wadhwani Foundation Certificate - 69da3e6b2578ea0d89b118f3.pdf": "wadhwani-2.jpg",
    "gemini 1.pdf": "gemini.jpg",
    "spring board ml.pdf": "springboard.jpg",
    "Cyber security panimalar.pdf": "cyber-panimalar.jpg"
}

source_dir = r"D:\Certificates\Certificate"
target_dir = r"C:\Users\AKASH\.gemini\antigravity\scratch\akashgallery\public\certificates"
vercel_dir = r"D:\Port folio\vercel\public\certificates"

for pdf, jpg in files.items():
    pdf_path = os.path.join(source_dir, pdf)
    if not os.path.exists(pdf_path):
        print(f"Not found: {pdf_path}")
        continue
    
    jpg_path1 = os.path.join(target_dir, jpg)
    jpg_path2 = os.path.join(vercel_dir, jpg)
    
    try:
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)
        pix = page.get_pixmap(dpi=150)
        pix.save(jpg_path1)
        pix.save(jpg_path2)
        print(f"Converted and saved {jpg}")
    except Exception as e:
        print(f"Error converting {pdf}: {e}")
