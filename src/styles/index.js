import styled from "styled-components";

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

export const ProfileImage = styled.img((props) => ({
  src: props.src,
  alt: props.alt,
  width: "40%",
  borderRadius: "3%",
  backgroundColor: "white",
  border: "10px solid gray",
  padding: "2rem",
  boxShadow: "0 8px 8px -4px gray",
}));

export const ImageHanger = styled.div({
  width: "100px",
  height: "100px",
  borderBottom: "2px solid black",
  borderRight: "2px solid black",
  transform: "rotate(-135deg)",
  marginBottom: "-4rem",
  boxShadow: "inset -7px -7px 5px -7px rgba(0,0,0,0.4)",
});

export const ProfileDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "2px solid gray",
  fontSize: "1rem",
  textAlign: "center",
  width: "50%",
  borderRadius: "3%",
  lineHeight: "0%",
  backgroundColor: "white",
  boxShadow: "0 5px 5px -4px gray",
});
