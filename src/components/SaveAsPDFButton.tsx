"use client";
// import html2pdf from "html2pdf.js"

export function SaveAsPDFButton() {
  const saveAsPDF = async () => {
    const options = {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.DOC_ZILLA_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        html: document.body.outerHTML,
      }),
    };

    fetch("https://api.doczilla.app/v1/pdf", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    // html2pdf().from(document.body).set({
    //   margin:       1,
    //   filename:     'CV.pdf',
    //   image:        { type: 'jpeg', quality: 0.98 },
    //   html2canvas:  { scale: 2 },
    //   jsPDF:        { unit: 'px', format: 'letter', orientation: 'portrait' }
    // }).save()
    // const canvas = await html2canvas(document.body)
    // doc.html(document.body, {
    //   callback: function (pdf) {
    //     pdf.save("CV.pdf");
    //   },
    //   html2canvas: {
    //     windowHeight: document.body.clientHeight,
    //     windowWidth: document.body.clientWidth,
    //   },
    //   width: document.body.clientWidth,
    //   windowWidth: document.body.clientWidth,
    //   x: 0,
    //   y: 0,
    // });
  };

  return <button onClick={saveAsPDF}>Save as PDF</button>;
}
