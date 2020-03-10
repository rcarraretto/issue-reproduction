# pdfminer issue

```bash
docker build -t pdfminer-issue .
docker run -it -v $(pwd):/tmp/test pdfminer-issue python3 /usr/local/bin/pdf2txt.py -V --output_type xml /tmp/test/file.pdf
```

## pdfminer version

```bash
docker run -it -v $(pwd):/tmp/test pdfminer-issue bash
cat /usr/local/lib/python3.7/site-packages/pdfminer/__init__.py
```
