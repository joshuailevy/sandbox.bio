<script>
import Execute from "$components/Execute.svelte";
</script>

We're now ready to call variants in our sample! `freyja variants` calls SNPs, insertions, and deletions in our sample. It also saves coverage depth information which will be important later when we run `freyja demix`.

Run the following command to call variants:

<Execute command="freyja variants trimmed.sorted.bam --ref NC_063383.1.fasta --variants variants.tsv --depths depths.tsv" />

Let's break down the command:
- `trimmed.sorted.bam` is a positional argument, so we don't use an input flag to specify our input file here
- `--ref NC_063383.1.fasta` tells `freyja` that we want to call variants with respect to the Mpox reference genome
- `--variants` and `--depths` correspond to the output filenames for the variants and depths files, respectively.

Let's take a look at the variant file:
<Execute command="head variants.tsv" />

You'll see columns corresponding to `REF`, `ALT`, and `POS`.
- `POS` is the position of the mutation
- `REF` is the reference allele
- `ALT` is the alternate allele

You'll also notice that some entries in ALT contain `+` or `-` characters. These correspond to insertions and deletions, respectively.

Now, let's take a look at the depth file:
<Execute command="head depths.tsv" />

Here, the columns correspond to the position, reference base, and the depth of coverage at that position. However, it looks like the depth is 0 for these positions. This is because we're only looking at the first 10 positions in the genome, which aren't covered by our sample.

Let's use `head` and `tail` to see the depth of coverage for a region that's covered by our amplicon scheme.
<Execute command="head -n 111040 depths.tsv | tail -n 20" />