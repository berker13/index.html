import React from 'react';
import Carousel from "../carousel/carousel";
import Header from "../headr/header";
import Footer from "../footer/footer";
import "./skills.css";
import { Grommet } from 'grommet';
import { introdata, socials} from "./data.js";

function Portfolio() {
    return (
        <Grommet full>
            <section id="sectionheader">
                {<Header></Header>}
            </section>

            <section id="section1">
                <h2>Sekce 1</h2>
                {<Carousel></Carousel>}
            </section>

            <section className="Skills">
                <h2>Dosažené Dovednosti</h2>
                <div className="Skill" title="JavaScript">
                    JavaScript
                </div>
                <div className="Skill" title="React.js">
                    React.js
                </div>
                <div className="Skill" title="CSS">
                    CSS
                </div>
                <div className="Skill" title="HTML">
                    HTML
                </div>

            </section>


            <section id="section3">
                <h2>Sekce 3</h2>
                {/* Obsah sekce 3 */}
            </section>

            <section id="sectionfooter">
                {<Footer></Footer>}
            </section>
        </Grommet>
    );
}
export default Portfolio;

