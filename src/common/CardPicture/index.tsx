import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";

import alecrimImg from "../../img/scent-pictures/alecrim.jpg";
import bergamotaImg from "../../img/scent-pictures/bergamota.jpg";
import canelaImg from "../../img/scent-pictures/canela-da-china.jpg";
import capimImg from "../../img/scent-pictures/capim-limao.jpg";
import cedroImg from "../../img/scent-pictures/cedro-atlas.jpg";
import cipestreImg from "../../img/scent-pictures/cipreste.jpg";
import citronelaImg from "../../img/scent-pictures/citronela.jpg";
import cravoImg from "../../img/scent-pictures/cravo-india.jpg";
import eucaliptoImg from "../../img/scent-pictures/eucalipto.jpg";
import ervaImg from "../../img/scent-pictures/erva-doce.jpg";
import gengibreImg from "../../img/scent-pictures/gengibre.jpg";
import geranioImg from "../../img/scent-pictures/geranio.jpg";
import hortelaImg from "../../img/scent-pictures/hortela.jpg";
import laranjaDoceImg from "../../img/scent-pictures/laranja_doce.jpg";
import lavandaImg from "../../img/scent-pictures/lavanda.jpg";
import lavandinImg from "../../img/scent-pictures/lavandin.jpg";
import limaoImg from "../../img/scent-pictures/limao.jpg";
import manjeronaImg from "../../img/scent-pictures/manjerona.jpg";
import mirraImg from "../../img/scent-pictures/mirra.jpg";
import olibanoImg from "../../img/scent-pictures/olibano.jpg";
import palmarosaImg from "../../img/scent-pictures/palmarosa.jpg";
import patchouliImg from "../../img/scent-pictures/patchouli.jpg";
import pauRosaImg from "../../img/scent-pictures/pau_rosa.jpg";
import petitgrainImg from "../../img/scent-pictures/petitgrain.jpg";
import salviaImg from "../../img/scent-pictures/salvia.jpg";
import sandaloImg from "../../img/scent-pictures/sandalo.jpg";
import teatreeImg from "../../img/scent-pictures/teatree.jpg";
import vetiverImg from "../../img/scent-pictures/vetiver.jpg";
import ylangImg from "../../img/scent-pictures/ylang-ylang.jpg";

interface Prop {
    pictureId :string;
}

const knownPictures :Record<string, string> = {
    "Alecrim": alecrimImg,
    "Bergamota": bergamotaImg,
    "Canela-da-china": canelaImg,
    "Capim Limão": capimImg,
    "Cedro-do-Atlas": cedroImg,
    "Cipreste": cipestreImg,
    "Citronela": citronelaImg,
    "Cravo-da-índia": cravoImg,
    "Erva-Doce": ervaImg,
    "Eucalipto-glóbulus": eucaliptoImg,
    "Gengibre": gengibreImg,
    "Gerânio-bourbon": geranioImg,
    "Hortelã-pimenta": hortelaImg,
    "Laranja-doce": laranjaDoceImg,
    "Lavanda": lavandaImg,
    "Lavandim": lavandinImg,
    "Limão": limaoImg,
    "Majerona": manjeronaImg,
    "Mirra": mirraImg,
    "Olíbano": olibanoImg,
    "Palmarosa": palmarosaImg,
    "Patchouli": patchouliImg,
    "Pau-rosa": pauRosaImg,
    "Petitgrain (laranja amarga)": petitgrainImg,
    "Salvia-esclaréia": salviaImg,
    "Sandalo": sandaloImg,
    "Tea Tree": teatreeImg,
    "Vertiver": vetiverImg,
    "Ylang-Ylang": ylangImg
};

const Picture :FunctionComponent<Prop> = (props :Prop) => {

    const pic = props.pictureId;

    const pictureSrc = knownPictures[pic] || "none";

    return (
        <Card.Img variant="top" src={pictureSrc} />
    );
}

export default Picture;