<script> import Execute from "$components/Execute.svelte";  import Link from "$components/Link.svelte"; </script>


After assessing read quality with FastQC, the next step is to **clean and trim the reads** to remove low‑quality bases and adapter contamination.  
For this, we use <Link href="https://github.com/usadellab/Trimmomatic/Trimmomatic">Trimmomatic</Link>, a widely used tool for preprocessing Illumina sequencing data.

Trimmomatic can:
- remove adapter sequences  
- trim low‑quality bases from read ends  
- perform sliding‑window quality trimming  
- discard reads that are too short after trimming  

Below, Trimmomatic is run in **paired‑end (PE)** mode on the paired FASTQ files  
`ERR11547421_1.fastq` and `ERR11547421_2.fastq`.


<Execute inline command="trimmomatic PE -phred33 ERR11547421_1.fastq ERR11547421_2.fastq output_forward_paired.fastq output_forward_unpaired.fastq output_reverse_paired.fastq output_reverse_unpaired.fastq ILLUMINACLIP:[adapter_TruSeq3-PE.fa]:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 MINLEN:36" />

Once the command finishes, Trimmomatic will produce four FASTQ files containing the paired and unpaired reads after trimming. These files represent the cleaned version of your sequencing data.

The paired output files are typically used for downstream analysis, while the unpaired reads may be discarded or analysed separately depending on the workflow.

Trimming is a critical preprocessing step, as it removes low‑quality bases and adapter contamination that can negatively affect read mapping, assembly, and variant calling. To verify the effectiveness of trimming, you should re‑run FastQC on the trimmed reads and compare the results to the original data before proceeding.
