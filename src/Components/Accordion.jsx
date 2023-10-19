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
    <div className='flex flex-col gap-3'>
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
          aria-controls='panel1bh-content'
          id='panel1bh-header'
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
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            We are focused on raising awareness and imparting knowledge about
            recycling, its benefits, and proper disposal methods. This involves
            workshops, awareness campaigns, and educational materials to inform
            and engage the community.
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
          aria-controls='panel1bh-content'
          id='panel1bh-header'
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
            Conservation
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
          In our recycling efforts, we're all about taking care of our precious natural resources and cutting down on waste. We've got recycling programs in place that not only reduce the harm we do to the environment but also keep our landfills from piling up. It's all about being responsible with how we manage our valuable resources.
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
          aria-controls='panel1bh-content'
          id='panel1bh-header'
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
            Collaboration
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            Collaboration means teaming up with local businesses, government
            agencies, and environmental organizations to build a strong support
            network for recycling projects. It's all about forming partnerships
            to make recycling facilities better and to reach out to more people
            in the community.
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
          aria-controls='panel1bh-content'
          id='panel1bh-header'
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
            Modernization
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#1d232a", color: "#8d94a0" }}>
          <Typography>
            We're bringing a modern touch to our project by introducing
            technology and creative solutions. This could mean using smart
            recycling bins, mobile apps to track your recycling progress, or
            even fun games to motivate recycling. These fresh ideas make our
            project more efficient and engaging for everyone involved.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Repeat similar code for other Accordion panels */}
    </div>
  );
}
