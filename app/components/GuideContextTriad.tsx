type GuideContextTriadProps = {
  topTitle: string;
  topText: string;
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
  caption?: string;
};

export function GuideContextTriad({
  topTitle,
  topText,
  leftTitle,
  leftText,
  rightTitle,
  rightText,
  caption,
}: GuideContextTriadProps) {
  return (
    <figure className="guide-triad">
      <div className="guide-triad-canvas">
        <div className="guide-triad-node guide-triad-worker">
          <h3>{topTitle}</h3>
          <p>{topText}</p>
        </div>
        <div className="guide-triad-node guide-triad-job">
          <h3>{leftTitle}</h3>
          <p>{leftText}</p>
        </div>
        <div className="guide-triad-node guide-triad-risk">
          <h3>{rightTitle}</h3>
          <p>{rightText}</p>
        </div>
        {caption ? <figcaption>{caption}</figcaption> : null}
      </div>
    </figure>
  );
}
