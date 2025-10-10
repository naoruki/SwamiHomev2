import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import QRCode from "react-qr-code";
import logo from "../assets/logo.svg";
import "../styles/UserViewPage.css";

const API_URL = import.meta.env.VITE_API_URL;

const NameCard = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_URL}/users/${id}`);

        if (res.status === 404) {
          setNotFound(true);
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("❌ Error fetching user:", err);
        setNotFound(true);
      }
    };

    fetchUser();
  }, [id]);

  if (notFound) {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    return <h3 className="text-center mt-5">Loading user...</h3>;
  }


  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${user.name}
N;CHARSET=UTF-8:${user.name.split(" ").slice(-1)};${user.name
    .split(" ")
    .slice(0, -1)
    .join(" ")};;;
EMAIL;CHARSET=UTF-8;TYPE=WORK,INTERNET:${user.email}
TEL;TYPE=HOME,VOICE:${user.phoneNumber || ""}
ADR;CHARSET=UTF-8;TYPE=WORK:;;5 Sembawang Walk, Singapore 757717;;;
TITLE;CHARSET=UTF-8:${user.role}
ROLE;CHARSET=UTF-8:${user.role}
ORG;CHARSET=UTF-8:SWAMI
URL;TYPE=WORK;CHARSET=UTF-8:https://www.swami.org.sg
REV:${new Date().toISOString()}
END:VCARD
  `.trim();

  const handleDownload = () => {
    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${user.name || "contact"}.vcf`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="user-view-page d-flex flex-column justify-content-between align-items-center text-center">
      <header className="w-100 py-3 pt-5">
        <h2 className="m-0">Swami Home</h2>
        <center>
          <img src={logo} alt="Swami Logo" style={{ height: "100px", marginTop: "10px" }} />
        </center>
      </header>

      <main className="flex-grow-1 d-flex flex-column w-100">
        <h3 className="fw-bold">{user.name}</h3>
        <p className="text-muted mb-1">{user.role}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phoneNumber || "-"}</p>
        <p><strong>Address:</strong> 5 Sembawang Walk, Singapore 757717</p>

        {user.enabled && (
          <div className="text-center mt-4">
            <h6 className="mb-3">Scan or Click Below to Save Contact</h6>
            <div className="p-3 bg-white d-inline-block rounded shadow" style={{ border: "1px solid #ddd" }}>
              <QRCode value={vCard} size={220} includeMargin={true} />
            </div>

            <div className="mt-3">
              <button onClick={handleDownload} className="btn btn-primary">
                Download vCard
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="w-100 py-2">
        <p className="mb-0">© {new Date().getFullYear()} Swami Home</p>
      </footer>
    </div>
  );
};

export default NameCard;
