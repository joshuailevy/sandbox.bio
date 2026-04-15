<script>
import Link from "$components/Link.svelte";
</script>

Here, we will be showing how to use `ivar` and `freyja` to analyze amplicon sequencing data for mpox.

Amplicon sequencing relies on pre-defined primer sequences to amplify specific genomic regions of interest for a given pathogen. This lends itself to increased precision and sensitivity for a target pathogen, making it the method of choice for routine surveillance of pathogens and detecting novel variants.

Since we're only targetting mpox, we're interested in recovering the relative abundance of the different lineages present in the sample. By the end of this tutorial, you will be able to:
- Perform primer trimming on an amplicon sequencing sample using `ivar`
- Call variants present in the sample
- Determine relative abundances of constituent lineages in the sample using `freyja`


The data we will be using was generated using the amplicon sequencing read simulator tool <Link href="https://github.com/andersen-lab/Bygul">Bygul</Link> using mpox clinical genomes.