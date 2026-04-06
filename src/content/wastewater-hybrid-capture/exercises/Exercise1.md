<script>
// Answers
//   samtools view -F 4 sars-cov-2.sam | cut -f3 | grep -c -x MN908947.3   -> 12
//   samtools view -F 4 adenovirus.sam | cut -f3 | grep -c -x DQ315364.2   -> 18



import Exercise from "$components/Exercise.svelte";

let criteria = [
	{
		name: "File <code>adenovirus.sam</code> exists (map the same FASTQs to <code>HAdV-F_reference.fasta</code>)",
		checks: [
			{
				type: "file",
				path: "adenovirus.sam",
				action: "exists"
			}
		]
	},
	{
		name: "<code>adenovirus.sam</code> matches a fresh minimap2 run against <code>HAdV-F_reference.fasta</code>",
		checks: [
			{
				type: "file",
				path: "adenovirus.sam",
				action: "contents",
				commandObserved: "cat adenovirus.sam",
				commandExpected: "minimap2 -ax sr HAdV-F_reference.fasta ERR11547421_1.fastq.gz ERR11547421_2.fastq.gz"
			}
		]
	},
	{
		name: "Mapped reads with RNAME <code>MN908947.3</code> (SARS-CoV-2) in <code>sars-cov-2.sam</code> — should be <strong>12</strong> for this sample",
		checks: [
			{
				type: "file",
				path: "sars-cov-2.sam",
				action: "contents",
				commandObserved: "echo 12",
				commandExpected: "samtools view -F 4 sars-cov-2.sam | cut -f3 | grep -c -x MN908947.3"
			}
		]
	},
	{
		name: "Mapped reads with RNAME <code>DQ315364.2</code> (HAdV-F) in <code>adenovirus.sam</code> — should be <strong>18</strong> for this sample",
		checks: [
			{
				type: "file",
				path: "adenovirus.sam",
				action: "contents",
				commandObserved: "echo 18",
				commandExpected: "samtools view -F 4 adenovirus.sam | cut -f3 | grep -c -x DQ315364.2"
			}
		]
	}
];

let hints = [
	"Hybrid capture enriches several targets in one library. Each minimap2 run aligns Allow reads to one reference. Count lines where SAM column 3 (RNAME) equals that genome’s sequence ID from the FASTA header (first field after <code>&gt;</code>).",
	"Use <code>samtools view -F 4</code> to omit unmapped reads (flag 0x4).",
	"<code>samtools view -F 4 sars-cov-2.sam | cut -f3 | grep -c -x MN908947.3</code> will count the number of reads mapped to SARS-CoV-2.",
	"<code>samtools view -F 4 adenovirus.sam | cut -f3 | grep -c -x DQ315364.2</code> will count the number of reads mapped to HAdV-F.",
];
</script>

You already created `sars-cov-2.sam` by mapping to `SARS-CoV-2_reference.fasta`. Using the same sample files (`ERR11547421_1.fastq.gz` and `ERR11547421_2.fastq.gz`), build `adenovirus.sam` by mapping to `HAdV-F_reference.fasta`.

The total SAM line counts are similar for both runs (same input reads), but since this is a hybrid capture run, the reads are not evenly distributed across the targets. For this subsample, SARS-CoV-2 and HAdV-F yields differ in mapped read counts.

1. Create `adenovirus.sam` with minimap2 (see Step 2 for an example).
2. Count mapped alignments (`samtools view -F 4 <input_file>`) whose `RNAME` (field 3) is `MN908947.3` in `sars-cov-2.sam` and `DQ315364.2` in `adenovirus.sam` (see the `>` lines in the respective FASTA files).


<Exercise {criteria} {hints} />
