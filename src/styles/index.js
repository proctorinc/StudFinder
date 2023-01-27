import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: "1rem",
  paddingTop: "1rem",
  flexGrow: 1,
});

export const NavbarContainer = styled.div({
  top: 0,
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  padding: "0 0.5rem",
  fontSize: "2rem",
});

export const WallBackground = styled(motion.div)({
  backgroundImage: "url('wall-texture.avif')",
  position: "absolute",
  top: 0,
  height: "100%",
  width: "100%",
  zIndex: -1,
});

export const ProfileContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ProfileImage = styled.img((props) => ({
  src: props.src,
  alt: props.alt,
  width: "300px",
  border: "1px solid black",
}));

export const PictureFrame = styled.div({
  border: "10px solid #613613",
  padding: "2rem",
  borderRadius: "3%",
  backgroundColor: "#fafafa",
  boxShadow: "0 8px 8px -4px gray",
});

export const ImageHanger = styled.div({
  width: "90px",
  height: "90px",
  borderBottom: "2px solid black",
  borderRight: "2px solid black",
  transform: "rotate(-135deg)",
  marginBottom: "-2.75rem",
  boxShadow: "inset -7px -7px 5px -7px rgba(0,0,0,0.4)",
});

export const ProfileDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "2px solid gray",
  fontSize: "13px",
  textAlign: "center",
  marginTop: "1rem",
  padding: "0.25rem 1rem",
  borderRadius: "3%",
  lineHeight: "0",
  backgroundColor: "white",
  boxShadow: "0 5px 5px -4px gray",
});

export const StyledSlider = styled.div({
  width: "100%",
  maxWidth: "500px",
  height: "200px",
  margin: "auto",
});

export const StyledSliderTrack = styled.div({
  position: "relative",
  top: "20px",
  height: "4px",
});

export const StyledSliderThumb = styled.img(({ src, alt }) => ({
  src: src,
  alt: alt,
  width: "200px",
  height: "200px",
}));
