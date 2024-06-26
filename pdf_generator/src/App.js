import React from "react";
import DocuPDF from "./components/DocuPDF";
import Button from "react-bootstrap/Button";
import VistaWeb from "./components/VistaWeb";

function App() {
  const [poema, setPoema] = React.useState("");
  const [verWeb, setVerWeb] = React.useState(false);
  const [verPDF, setVerPDF] = React.useState(false);
  function fetchPoema() {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then((response) => response.json())
      .then((data) => {
        setPoema(data[0]);
        console.log(data[0]);
      });
  }

  React.useEffect(() => {
    fetchPoema();
  }, []);

  const Menu = () => (
    <nav
      style={{
        display: "flex",
        padding: "10px",
        justifyContent: "space-around",
        background: "#010101"
      }}
    >
      <Button
        variant="dark"
        onClick={() => {
          setVerWeb(!verWeb);
          setVerPDF(false);
        }}
      >
        {verWeb ? "Disguise Web" : "Verse Web"}
      </Button>
      <Button
        variant="dark"
        onClick={() => {
          setVerPDF(!verPDF);
          setVerWeb(false);
        }}
      >
        {verPDF ? "Disguise PDF" : "Verse PDF"}
      </Button>
      <div
        document={<DocuPDF poema={poema} />}
        fileName="poema.pdf"
      >
        <Button variant="info">Download PDF</Button>
      </div>
    </nav>
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <Menu />
      {poema ? (
        <>
          {verWeb ? <VistaWeb poema={poema} /> : null}
          {verPDF ? (
            <div style={{ width: "100%", height: "90vh" }}>
              <DocuPDF poema={poema} />
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default App;