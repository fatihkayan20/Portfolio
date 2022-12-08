import React from "react";
import { BsBriefcaseFill, BsCalendarDate } from "react-icons/bs";
import { IQualification } from "../types/IQualification";
import { NavItem } from "../types/NavItem";
import { getQualifications } from "../utils/supabase/getQualifications";
import { QualificationLine } from "./QualificationLine";
import { format } from "date-fns";

export const Qualification = () => {
  const [qualifications, setQualifications] = React.useState<IQualification[]>(
    []
  );

  React.useEffect(() => {
    getQualifications()
      .then((data) => {
        setQualifications(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getFormattedDate = (date?: string) => {
    if (!date) {
      return "Now";
    }
    return format(new Date(date), "YYY-MM");
  };

  return (
    <section
      className="Qualifications section"
      enum-data={NavItem.Qualifications}
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={`qualification__button button__flex }`}>
            <BsBriefcaseFill className="qualification__icon" /> Jobs
          </div>
        </div>

        <div className="qualification__sections">
          <div className={`qualification__content `}>
            {qualifications.map((qualification, index) => (
              <div className="qualification__data" key={qualification.id}>
                <QualificationLine isLeft={index % 2 !== 0} />

                <div>
                  <h3 className="qualification__title">{qualification.role}</h3>
                  <span className="qualification__subtitle">
                    {qualification.company}
                  </span>
                  <div className="qualification__calendat">
                    <BsCalendarDate />{" "}
                    {getFormattedDate(qualification.startDate)} -
                    {getFormattedDate(qualification.endDate)}
                  </div>
                </div>

                <QualificationLine isLeft={false} isRight={index % 2 === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
