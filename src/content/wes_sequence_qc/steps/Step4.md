
After assessing read quality with FastQC, the next step is to **clean and trim the reads** to remove low‑quality bases and adapter contamination.  
For this, we use <Link href="https://github.com/OpenGene/fastp">fastp</Link>, a fast, all‑in‑one tool for preprocessing FASTQ files.

fastp can:
- automatically detect and remove adapter sequences  
- trim low‑quality bases from read ends  
- perform sliding‑window quality trimming  
- filter short or low‑quality reads  
- generate quality control reports  

Below, fastp is run on paired‑end FASTQ files  
`ERR11547421_1.fastq.gz` and `ERR11547421_2.fastq.gz`.

<Execute inline command="{fastp -i ERR11547421_1.fastq.gz -I ERR11547421_2.fastq.gz -o out.R1.fastq.gz -O out.R2.fastq.gz}" />


Once the command finishes, fastp produces trimmed FASTQ files containing the cleaned paired‑end reads, along with an **HTML report** (`fastp.html`) and a **JSON summary file** (`fastp.json`) describing the filtering and trimming results.

The trimmed output files are typically used for downstream analysis, while the fastp reports provide a concise overview of read quality before and after processing.

As with other trimming tools, it is good practice to re‑run FastQC on the trimmed reads and compare the results to the original data to ensure that trimming improved read quality without removing excessive data.
