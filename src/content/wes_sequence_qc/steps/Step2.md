<script> import Execute from "$components/Execute.svelte";  import Link from "$components/Link.svelte"; </script>

After running FastQC on individual samples, the next step is to summarise all QC results in a single, easy-to-interpret report. For this, we use <Link href="https://multiqc.info/">MultiQC</Link>, a tool that aggregates results from multiple analyses into one interactive dashboard.

MultiQC scans the current directory for supported output files—such as FastQC reports—and automatically combines them.

Run MultiQC with the following command:

<Execute inline command="multiqc ." />

Once the command finishes, you will see a new file called `multiqc_report.html`. This report provides a unified overview of quality metrics across all samples, making it easy to spot outliers, batch effects, or systematic issues.

MultiQC is especially useful in large sequencing projects, where comparing QC metrics across many samples is essential before proceeding to downstream analysis.
