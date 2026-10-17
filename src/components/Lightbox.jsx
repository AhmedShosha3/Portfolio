import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

export default function Lightbox({ shots, index, onChange, onClose }) {
  const dlg = useRef(null);
  const startX = useRef(null);
  const [failed, setFailed] = useState(false);
  const open = index !== null;
  const count = shots.length;
  const shot = open ? shots[index] : null;

  useEffect(() => {
    const d = dlg.current;
    if (!d) return undefined;
    if (open && !d.open) {
      d.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && d.open) {
      d.close();
    }
    return undefined;
  }, [open]);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );

  useEffect(() => {
    setFailed(false);
    if (!open || count < 2) return;
    [1, -1].forEach((d) => {
      new Image().src = shots[(index + d + count) % count].src;
    });
  }, [index, open, count, shots]);

  const go = (i) => onChange((i + count) % count);

  return (
    <dialog
      ref={dlg}
      className="lb"
      aria-label="Screenshot viewer"
      onClose={() => {
        document.body.style.overflow = "";
        onClose();
      }}
      onKeyDown={(e) => {
        if (!open) return;
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      onClick={(e) => {
        if (!e.target.closest("img,button,.lb-cap,.lb-count"))
          dlg.current.close();
      }}
      onPointerDown={(e) => {
        startX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (startX.current != null && count > 1 && open) {
          const dx = e.clientX - startX.current;
          if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        }
        startX.current = null;
      }}
    >
      {shot && (
        <>
          <button
            className="lb-btn lb-close"
            type="button"
            aria-label="Close viewer"
            onClick={() => dlg.current.close()}
          >
            <Icon name="close" />
          </button>
          {count > 1 && (
            <button
              className="lb-btn lb-prev"
              type="button"
              aria-label="Previous screenshot"
              onClick={() => go(index - 1)}
            >
              <Icon name="back" />
            </button>
          )}
          <img
            src={shot.src}
            alt={shot.alt || ""}
            onError={() => setFailed(true)}
          />
          <p className="lb-cap">
            {failed ? "This image could not be loaded." : shot.caption || ""}
          </p>
          {count > 1 && (
            <span className="lb-count" aria-live="polite">
              {index + 1} / {count}
            </span>
          )}
          {count > 1 && (
            <button
              className="lb-btn lb-next"
              type="button"
              aria-label="Next screenshot"
              onClick={() => go(index + 1)}
            >
              <Icon name="arrow" />
            </button>
          )}
        </>
      )}
    </dialog>
  );
}
