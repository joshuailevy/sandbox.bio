<script> import Execute from "$components/Execute.svelte"; import Link from "$components/Link.svelte"; </script>

We preloaded data from Child et al. into your sandbox. Let’s take a look at what files we have available to us.

Type the following in the command line:

<Execute inline command={"ls *.fastq.gz"} /> to list all the sequence files.

Your directory contains paired-end read files (`*.fastq.gz`) as well as reference genomes (`*.fasta`) for pathogens of interest. The read files follow the standard paired-end naming convention, with `_1.fastq.gz` and `_2.fastq.gz` corresponding to forward and reverse reads.

Rather than inspecting individual reads manually, a more efficient way to assess sequencing quality is to use an automated QC tool. Here, we will use <Link href="https://github.com/kbrown3687524/WES_FastQC_Tutorial.git">GitHub Codespaces FastQC</Link>, which provides a comprehensive overview of sequencing quality metrics.

Let’s run FastQC on all FASTQ files in the directory:
<Execute inline command={"ls *.fastq.gz"} /> to list all the sequence files.

FastQC generates an HTML report for each input file, summarizing key quality indicators such as per-base quality scores, GC content, sequence duplication levels, and the presence of adapters or overrepresented sequences.

Once the command completes, you should see several new output files ending in `_fastqc.html` and `_fastqc.zip`. These reports can be opened in a web browser and will help you decide whether any additional filtering or trimming steps are needed before downstream analysis.

