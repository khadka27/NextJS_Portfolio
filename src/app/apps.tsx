import About from "@/components/About";
import Project from "@/components/Project";
import Home from "@/components/home";
import Slogan from "@/components/Slogan";
import React from "react";
import Item from "@/components/ui/scroll";
import Skills from "@/components/Skills";
import ContactForm from "@/components/contact";
import CertificationsPage from "@/components/Certifications";

function apps() {
  return (
    <div>
      <Item />
      <Home />
      <About />
      <Project />
      <Skills />
      <Slogan />
      <CertificationsPage />
      <ContactForm />
    </div>
  );
}

export default apps;
