import { loadProspectData } from "@/lib/prospect-data";
import { getTemplate } from "@/templates";

const data = loadProspectData();
const Template = getTemplate(data.config.template);

export default function AboutPage() {
  return <Template.About data={data} />;
}
