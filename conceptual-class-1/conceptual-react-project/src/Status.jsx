import Container from "./Container";
import StatusBtn from "./StatusBtn";

export default function Status({data}) {
  const pendingData = data.filter(e => e.status === "Pending")
  const submitedData = data.filter(e => e.status === "Submited")
  const reviewedData = data.filter(e => e.status === "Reviewed")
  console.log({pendingData,submitedData,reviewedData})
  return (
    <>
      <Container>
        <div className="mb-5">
          <div className=" h-75 grid grid-cols-3 gap-5 p-10">
            <div className="bg-gray-400 elementCenter">
              <p className="text-4xl font-bold">Pending</p>
              <p className="text-2xl font-bold">{pendingData.length}</p>
            </div>
            <div className="bg-purple-400 elementCenter">
              <p className="text-4xl font-bold">Submited</p>
              <p className="text-2xl font-bold">{submitedData.length}</p>
            </div>
            <div className="bg-cyan-600 elementCenter">
              <p className="text-4xl font-bold">Reviewed</p>
              <p className="text-2xl font-bold">{reviewedData.length}</p>
            </div>
          </div>
          <div className="px-10 text-right">
            <StatusBtn></StatusBtn>
          </div>
        </div>
      </Container>
    </>
  );
}
