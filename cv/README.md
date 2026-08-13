# CV source

The résumé served at `/Joaquin_Olivo_CV.pdf` is generated from `cv.html`, so edits
are made in HTML rather than in a PDF editor.

To regenerate after editing `cv.html`:

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=cv_raw.pdf "file:///D:/Projects/Portafolio/cv/cv.html"
```

```bash
python cv/stamp_footer.py cv_raw.pdf public/Joaquin_Olivo_CV.pdf
```

`stamp_footer.py` adds the running `Name • Page N` footer and the PDF metadata.
Keep the layout at two pages — the `.page-break` div marks where page 2 starts.
