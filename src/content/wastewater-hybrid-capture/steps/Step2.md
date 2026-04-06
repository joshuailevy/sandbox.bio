<script>
import Execute from "$components/Execute.svelte";
import Link from "$components/Link.svelte";
</script>

`minimap2` is a command-line tool. To bring up the help, just type <Execute command="minimap2" inline />

As you can see, there are many options available for indexing/mapping reads to a reference genome.

- <Execute command="minimap2 -ax sr SARS-CoV-2_reference.fasta ERR11547421_1.fastq.gz ERR11547421_2.fastq.gz > sars-cov-2.sam" inline />

Let's break down the command:

- `-ax sr` tells `minimap2` that we want to use its **s**hort-**r**ead mapping preset
- `SARS-CoV-2_reference.fasta` is the reference genome we want to map the reads to
- `ERR11547421_1.fastq.gz` and `ERR11547421_2.fastq.gz` are the forward and reverse reads, respectively
- `sars-cov-2.sam` is the output file name. We use the `>` operator to redirect the output to the file.

Now, let's take a look at the first few lines of the SAM file using the `head` command.

<Execute command="head -n 5 sars-cov-2.sam" />

The first few lines (beginning with `@`) are SAM header lines, and the rest of the lines are individual alignments, one line per read or mate. See the <Link href="http://samtools.sourceforge.net/SAM1.pdf">SAM specification</Link> for more details about how to interpret the SAM file format.