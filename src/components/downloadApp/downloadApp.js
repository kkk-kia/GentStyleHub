import "./downloadApp.css";
import googlePlay from "../../images/googlePlayLink.png";
import appStore from "../../images/appStoreLink.png";

export const DownloadApp = () => (
  <div className="downloadApp-conteiner">
    <div style={{display:"flex"}}>
      <p>the</p>
      <p className="site-name">GentStyleHub</p>
      <p>app</p>
    </div>
    <p className="off">get 10% off</p>
    <div className="downloadLink">
      <img className="googlePlay" src={googlePlay}></img>
      <img className="appStore" src={appStore}></img>
    </div>
  </div>
);
