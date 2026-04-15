// Steps
import Intro from "./steps/Intro.md";
import Step1 from "./steps/Step1.md";
import Step2 from "./steps/Step2.md";
import Step3 from "./steps/Step3.md";

export const config = {
	// Metadata
	id: "freyja-amplicon-seq",
	name: "Freyja Introduction",
	subtitle: `by <a href="https://google.com" target="_blank">Dylan Pilz</a>`,
	description: "Analyze amplicon sequencing data using iVar and Freyja.",
	tags: ["freyja", "ivar", "igv"],
	difficulty: ["intermediate"],

	// Preload these tools as soon as the page loads
	tools: ["freyja", "ivar", "samtools", "ls", "head", "tail", "sort"],

	// Order of steps
	steps: [
		{ name: "Introduction", component: Intro },
		{ name: "Amplicon Sequencing Data", component: Step1 },
		{ name: "Primer Trimming", component: Step2 },
		{ name: "Sorting and Indexing", component: Step3 },
		{ name: "Variant Calling", component: Step4 },
		{ name: "Demixing", component: Step5 },
		{ name: "Conclusion", component: Conclusion },
	],

	// Files within "data/" that you need at runtime.
	// Whenever you update files within "data/", you will need to restart the "./setup.sh" script.
	files: ["NC_063383.1.fasta", "NC_063383.1.fasta.fai", "MPXV_primers_v1.2.bed", "sample_1.bam", "sample_1.bam.bai"]
};
