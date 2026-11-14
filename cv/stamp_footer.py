"""Stamp the running footer ("Name • Page N") onto each page of the rendered CV.

Usage: stamp_footer.py <source.pdf> <dest.pdf> [lang]
  lang: "en" (default) or "es", which switches the footer wording and metadata.
"""

import io
import sys

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas

SRC, DST = sys.argv[1], sys.argv[2]
LANG = sys.argv[3] if len(sys.argv) > 3 else "en"
NAME = "Joaquín Ernesto Olivo Escalante"

LOCALE = {
    "en": {
        "page": "Page",
        "title": f"{NAME} — Curriculum Vitae",
        "subject": "Systems Engineer | Backend / Software Engineer",
    },
    "es": {
        "page": "Página",
        "title": f"{NAME} — Hoja de vida",
        "subject": "Ingeniero de Sistemas | Desarrollador de Software Backend / Full-Stack",
    },
}[LANG]

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
    c.drawCentredString(width / 2, 22, f"{NAME} • {LOCALE['page']} {index}")
    c.save()
    buf.seek(0)

    page.merge_page(PdfReader(buf).pages[0])
    writer.add_page(page)

writer.add_metadata(
    {
        "/Title": LOCALE["title"],
        "/Author": NAME,
        "/Subject": LOCALE["subject"],
        "/Keywords": (
            "C#, .NET, ASP.NET Core, Angular, React, Backend, Full-Stack, "
            "Clean Architecture, DDD, CQRS, Design Patterns, SQL, NoSQL, MongoDB, "
            "Redis, Azure Cosmos DB, Azure DevOps, SonarQube, Unit Testing, QA Automation"
        ),
    }
)

with open(DST, "wb") as fh:
    writer.write(fh)

print(f"pages={total} -> {DST}")
