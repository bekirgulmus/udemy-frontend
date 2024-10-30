import { DataComing } from "./propstypes.ts";

export const Home = (props: DataComing) => {
  return (
    <div>
      {props.name} eğitimine hoş geldiniz. Kurs Sayısı : {props.courseNumber}
      {props.isBest ? (
        <p>En iyi React Eğitimi bu eğitim</p>
      ) : (
        <p>En iyi eğitim bir sonraki</p>
      )}
    </div>
  )
}
