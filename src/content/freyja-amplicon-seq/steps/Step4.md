<script>
import Execute from "$components/Execute.svelte";
</script>

We're now ready to call variants in our sample! `freyja variants` calls SNPs, insertions, and deletions in our sample. It also saves coverage depth information which will be useful to use later when we run `freyja demix`.

Run the following command to call variants:

<Execute command="freyja variants trimmed.sorted.bam --ref NC_063383.1.fasta --variants variants.tsv --depths depths.tsv" />
