// Steps
import Intro from "./steps/Intro.md";
import Step1 from "./steps/Step1.md";
import Step2 from "./steps/Step2.md";
import Conclusion from "./steps/Conclusion.md";
// Exercises
import Exercise1 from "./exercises/Exercise1.md";
import Exercise2 from "./exercises/Exercise2.md";

export const config = {
	// Metadata
	id: "wastewater-hybrid-capture",
	name: "Wastewater Hybrid Capture Sequencing Analysis",
	subtitle: `by <a href="https://google.com" target="_blank">Dylan Pilz</a>`,
	description: "Analyze wastewater hybrid capture sequencing data using standard bioinformatics tools.",
	tags: ["minimap2", "igv"],
	difficulty: ["beginner"],

	// Preload these tools as soon as the page loads
	tools: ["minimap2", "ls", "head", "tail", "sort"],

	// Order of steps
	steps: [
		{ name: "Introduction", component: Intro },
		{ name: "The data", component: Step1 },
		{ name: "Mapping SARS-CoV-2 reads using Minimap2", component: Step2 },
		// We use subtitle to define subsections. Click the "1 / 6" button at the bottom to see the effect on the table of contents
		{ name: "Adenovirus F Reads", component: Exercise1, subtitle: "Find reads mapping to a different reference genome from the same sample", header: true },
		{ name: "Exercises", component: Exercise2, subtitle: "Find exons in 500kb regions" },
		{ name: "The end", component: Conclusion, header: true }
	],

	// Files within "data/" that you need at runtime.
	// Whenever you update files within "data/", you will need to restart the "./setup.sh" script.
	files: ["ERR11547421_1.fastq.gz", "ERR11547421_2.fastq.gz", "SARS-CoV-2_reference.fasta", "HAdV-F_reference.fasta"]
};
