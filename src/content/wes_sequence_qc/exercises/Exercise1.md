
<script>
// Solution:
//    fastqc *.fastq.gz
//    multiqc .

import Link from "$components/Link.svelte";
import Exercise from "$components/Exercise.svelte";

let criteria = [
  {
    name: "You ran FastQC on all FASTQ files",
    checks: [
      {
        type: "file",
        path: "*_fastqc.html"
      },
      {
        type: "file",
        path: "*_fastqc.zip"
      }
    ]
  },
  {
    name: "You generated a MultiQC report summarising FastQC results",
    checks: [
      {
        type: "file",
        path: "multiqc_report.html"
      }
    ]
  }
];
</script>

Before performing any downstream analysis, it is essential to assess the quality of raw sequencing reads.

Use <Link href="https://www.bioinformatics.babraham.ac.uk/projects/fastqc/">FastQC</Link> to analyse the quality of all `*.fastq.gz` files in the current directory.  
FastQC generates per‑sample reports describing sequence quality, GC content, duplication levels, and overrepresented sequences.

Once FastQC has completed, use <Link href="https://multiqc.info/">MultiQC</Link> to aggregate all FastQC results into a single summary report.

<Exercise {criteria} />
