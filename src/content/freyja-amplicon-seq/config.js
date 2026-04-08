// Steps
import Intro from "./steps/Intro.md";
import Step1 from "./steps/Step1.md";
import Step2 from "./steps/Step2.md";
import Conclusion from "./steps/Conclusion.md";

// Exercises
import Exercise1 from "./exercises/Exercise1.md";

export const config = {
	// Metadata
	id: "freyja-amplicon-seq",
	name: "Amplicon Sequencing Analysis",
	subtitle: `by <a href="https://google.com" target="_blank">Your Name</a>`,
	description: "Analyze amplicon sequencing data using `ivar` and `freyja`.",
	tags: ["freyja", "ivar", "igv"],
	difficulty: ["intermediate"],

	// Preload these tools as soon as the page loads
	tools: ["freyja", "ivar", "samtools", "ls", "head", "tail", "sort"],

	// Order of steps
	steps: [
		{ name: "Introduction", component: Intro },
		{ name: "Overview of the data", component: Step1 },
		{ name: "Bedtools help", component: Step2 },
		// We use subtitle to define subsections. Click the "1 / 6" button at the bottom to see the effect on the table of contents
		{ name: "Exercises", component: Exercise1, subtitle: "Find non-exons", header: true },
		{ name: "The end", component: Conclusion, header: true }
	],

	// Files within "data/" that you need at runtime.
	// Whenever you update files within "data/", you will need to restart the "./setup.sh" script.
	files: ["NC_063383.1.fasta", "NC_063383.1.fasta.fai", "MPXV_primers_v1.2.bed", "sample_1.bam", "sample_1.bam.bai"]
};
