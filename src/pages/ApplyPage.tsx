import ApplyForm from "../ApplyForm";
import { NotExpert, Process, Profiles } from "../Landing";

export default function ApplyPage() {
  return (
    <div className="pt-[72px]">
      <Process />
      <Profiles />
      <NotExpert />
      <ApplyForm />
    </div>
  );
}
