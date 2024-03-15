import "./Dossier.scss";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export default function Dossier({ id, titre, couleur, dateModif }) {
  const backgroundColorStyle = {
    backgroundColor: couleur,
  };
  return (
    <article className="Dossier" style={backgroundColorStyle}>
      <div className="couverture">
        <IconButton className="btn-dossier rotate-button">
          <ThreeSixtyIcon />
        </IconButton>
        <img src={`images-dossiers/${id}.png`} alt={titre} />
        <IconButton className="btn-dossier close-button">
          <CloseIcon />
        </IconButton>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
        <IconButton className="btn-dossier edit" aria-label="edit" size="large">
          <EditIcon />
        </IconButton>
      </div>
    </article>
  );
}
