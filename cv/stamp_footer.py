"""Stamp the running footer ("Name • Page N") onto each page of the rendered CV."""

import io
import sys

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas

SRC, DST = sys.argv[1], sys.argv[2]
NAME = "Joaquín Ernesto Olivo Escalante"

reader = PdfReader(SRC)
writer = PdfWriter()
total = len(reader.pages)

for index, page in enumerate(reader.pages, start=1):
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)

    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(width, height))
    c.setFont("Helvetica", 7.5)
    c.setFillColorRGB(0.42, 0.45, 0.50)
    c.drawCentredString(width / 2, 22, f"{NAME} • Page {index}")
    c.save()
    buf.seek(0)

    page.merge_page(PdfReader(buf).pages[0])
    writer.add_page(page)

writer.add_metadata(
    {
        "/Title": "Joaquín Ernesto Olivo Escalante — Curriculum Vitae",
        "/Author": NAME,
        "/Subject": "Systems Engineer | Backend / Software Engineer",
        "/Keywords": "C#, .NET, ASP.NET Core, Backend, Full-Stack, Clean Architecture, DDD, CQRS, QA Automation",
    }
)

with open(DST, "wb") as fh:
    writer.write(fh)

print(f"pages={total} -> {DST}")
