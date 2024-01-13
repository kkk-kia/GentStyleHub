import "./popular-Stayles.css";
import sport from '../../images/sportCategory.webp'
import cacual from '../../images/cacualCategory.jpg'
import suit from '../../images/suitCategoty.jpg'
import cold from '../../images/coldCategory.webp'
import lee from '../../images/leeCategory.webp'

export const PopularStayles = () => {
  return (
    <div className="StaylesCategory">
      <div className="StaylesCategory-item">
        <img src={cold} style={{objectPosition:"-50px 0"}}></img>
      </div>
      <div className="StaylesCategory-item">
        <img src={suit} style={{objectPosition:"0 0"}}></img>
      </div>
      <div className="StaylesCategory-item">
        <img src={cacual}></img>
      </div>
      <div className="StaylesCategory-item">
        <img src={sport}></img>
      </div>
    </div>
  );
};
