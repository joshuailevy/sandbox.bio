// Steps
import Intro from "./steps/Intro.md";
import Step1 from "./steps/Step1.md";
import Step2 from "./steps/Step2.md";
import Step3 from "./steps/Step3.md";
import Step4 from "./steps/Step4.md";
import Conclusion from "./steps/Conclusion.md";
// Exercises
import Exercise1 from "./exercises/Exercise1.md"; 
import Exercise2 from "./exercises/Exercise2.md";

export const config = {
	// Metadata
	id: "wastewater-sequence-qc",
	name: "Wastewater Sequence Quality Control",
	subtitle: `by <a href="https://google.com" target="_blank">Keaghan Brown</a>`,
	description: "Sequence quality control evaluates and filters sequencing data to ensure accuracy before downstream analysis",
	tags: ["fastqc", "multiqc", "trimmomatic", "fastp", "quality control", "qc"],
	difficulty: ["beginner"],

	// Preload these tools as soon as the page loads
	tools: ["fastqc", "multiqc", "trimmomatic", "wc", "cat", "gzip", "gunzip", "ls", "head", "tail", "sort"],

	// Order of steps
	steps: [
		{ name: "Introduction to Quality Control (QC)", component: Intro },
		{ name: "Performing Quality Control on SARS-CoV-2 reads using FASTQC", component: Step1 },
		{ name: "Performing Quality Control on SARS-CoV-2 reads using MultiQC", component: Step2 },
		{ name: "Trimming SARS-CoV-2 reads using Trimmomatic", component: Step3 },
		{ name: "Trimming SARS-CoV-2 reads using FastP", component: Step4 },
		// We use subtitle to define subsections. Click the "1 / 6" button at the bottom to see the effect on the table of contents
		{ name: "Exercises", component: Exercise1, subtitle: "", header: true },
		{ name: "The end", component: Conclusion, header: true }
	],

	// Files within "data/" that you need at runtime.
	// Whenever you update files within "data/", you will need to restart the "./setup.sh" script.
	files: ["ERR11547421_1.fastq.gz", "ERR11547421_2.fastq.gz", "SARS-CoV-2_reference.fasta", "HAdV-F_reference.fasta"]
};
