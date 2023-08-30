interface IProps {
  params: { id: string };
}

const DetailExercice = ({ params }: IProps) => {
  return <div>DetailExercice {params.id}</div>;
};

export default DetailExercice;
