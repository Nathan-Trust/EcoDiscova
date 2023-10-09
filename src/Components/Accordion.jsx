import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import awareness1 from "../assets/awarenessPics12.jpeg";
import awareness2 from "../assets/awarenessPics11.jpeg";
import { useMyContext } from "../contexts/useContext.jsx";

export default function ControlledAccordion() {
  const [expanded, setExpanded] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#636973");
  const { setImage } = useMyContext();

  const handleBgChange = (panel) => {
    setActivePanel(panel);
    setBackgroundColor("#4baf47");
  };

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      handleBgChange(panel);
    } else {
      // Delay the color change for a short time to make it more noticeable
      setTimeout(() => {
        setActivePanel(null);
        setBackgroundColor("#636973");
      }, 300); // You can adjust the delay (in milliseconds) as needed
    }
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col gap-3">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          border: `1px solid ${
            activePanel === "panel1" ? backgroundColor : "#636973"
          }`,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor:
              activePanel === "panel1" ? backgroundColor : "#636973",
            color: "#fff",
            height: "80px",
          }}
          onClick={() => {
            setImage(awareness1);
            handleBgChange("panel1");
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontSize: "21px" }}>
            Carbon Offsetting
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            Tree planting is the act of planting young trees, shrubs, or other
            woody plants into the ground to establish new forests or enhance
            existing ones. It is a crucial component of environmental
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          border: `1px solid ${
            activePanel === "panel2" ? backgroundColor : "#636973"
          }`,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor:
              activePanel === "panel2" ? backgroundColor : "#636973",
            color: "#fff",
            height: "80px",
          }}
          onClick={() => {
            setImage(awareness2);
            handleBgChange("panel2");
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontSize: "21px" }}>
            Community Forestry
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            Tree planting is the act of planting young trees, shrubs, or other
            woody plants into the ground to establish new forests or enhance
            existing ones. It is a crucial component of environmental
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          border: `1px solid ${
            activePanel === "panel3" ? backgroundColor : "#636973"
          }`,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor:
              activePanel === "panel3" ? backgroundColor : "#636973",
            color: "#fff",
            height: "80px",
          }}
          onClick={() => {
            setImage(awareness1);
            handleBgChange("panel3");
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontSize: "21px" }}>
            E-waste Recycling
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            Tree planting is the act of planting young trees, shrubs, or other
            woody plants into the ground to establish new forests or enhance
            existing ones. It is a crucial component of environmental
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          border: `1px solid ${
            activePanel === "panel4" ? backgroundColor : "#636973"
          }`,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor:
              activePanel === "panel4" ? backgroundColor : "#636973",
            color: "#fff",
            height: "80px",
          }}
          onClick={() => {
            setImage(awareness2);
            handleBgChange("panel4");
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontSize: "21px" }}>
            Water Conservation
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            Tree planting is the act of planting young trees, shrubs, or other
            woody plants into the ground to establish new forests or enhance
            existing ones. It is a crucial component of environmental
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Repeat similar code for other Accordion panels */}
    </div>
  );
}
