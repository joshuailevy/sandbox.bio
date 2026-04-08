<script>
import Execute from "$components/Execute.svelte";
import IGVModal from "$components/igv/IGVModal.svelte";
import Link from "$components/Link.svelte";

let isOpen = false;
let igvOptions = {
	genome: "/data/freyja-amplicon-seq/NC_063383.1.fasta",
	locus: "NC_063383.1:105000-112000",
	tracks: [
		{ url: "/data/freyja-amplicon-seq/MPXV_primers_v1.2.bed", name: "Amplicon PCR primer scheme" },
		{ url: "/data/freyja-amplicon-seq/sample_1.bam", name: "Sample" },
	]
};
</script>

We preloaded the data in your home directory for this tutorial. Let's take a look at what files we now have:

Type <Execute command="ls" inline /> in the command line.

Your directory contains a sample file (already aligned for you!) and some reference files:
- `NC_063383.1.fasta`: The mpox reference genome (GenBank accession NC_063383.1)
- `MPXV_primers_v1.2.bed`: The amplicon PCR primer scheme

In order to have a rough sense of the data, let's load it into IGV:

<button class="btn btn-sm btn-primary mb-3" on:click={() => isOpen = !isOpen}>Launch IGV</button>

<IGVModal options={igvOptions} bind:isOpen={isOpen}>
	<span slot="after">
		The BED track shows primer scheme intervals; the BAM track shows alignments to <code>NC_063383.1</code>.
	</span>

</IGVModal>
