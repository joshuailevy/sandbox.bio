<script>
import Execute from "$components/Execute.svelte";
import Link from "$components/Link.svelte";
</script>

We preloaded data from <Link href="https://journals.asm.org/doi/10.1128/mbio.01468-23">Child et al.</Link> into your sandbox. Let's take a look at what files we have:

Type <Execute command="ls" inline /> in the command line.

Your directory contains a pair of read files (`*.fastq.gz`) and some reference genomes (`*.fasta`) for pathogens of interest.

Let's take a look at one of the read files. FASTQ files are typically in paired-end format, with `*_1.fastq` and `*_2.fastq` for the forward and reverse reads, respectively. 

We can now take a look at the first few lines of the file using the `head` command.

<Execute command="head -n 5 ERR11547421_1.fastq" />

You'll notice that each record is a 4-line block of text:
1. sequence header
2. sequence
3. quality header (usually just a `+`)
4. quality scores

The first line of the file is the sequence header. It contains the sequence identifier and any associated metadata. The second line is the sequence itself. The third line is the quality header, which is usually just a `+`. The fourth line is the quality scores.

The quality scores are represented as ASCII characters, with each character corresponding to a quality score. The quality score is the probability of the base being incorrect. The higher the quality score, the more confident we are in the base call. We see predominately `F`'s, which corresponds to a quality score of 70, which is quite good.

Next, let's count the number of lines in the file using the `wc` command.

<Execute command="wc -l ERR11547421_1.fastq" />

How many forward reads are in this sample?