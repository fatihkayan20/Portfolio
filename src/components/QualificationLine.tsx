import * as React from "react";

interface QualificationLineProps {
  readonly isLeft?: boolean;
  readonly isRight?: boolean;
}

export const QualificationLine: React.FC<QualificationLineProps> = ({
  isLeft,
  isRight,
}) => {
  if (isLeft) {
    return (
      <>
        <div></div>
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </>
    );
  }

  if (isRight) {
    return (
      <>
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      </>
    );
  }

  return null;
};
