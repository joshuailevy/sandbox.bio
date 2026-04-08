<script>
import Execute from "$components/Execute.svelte";
</script>

We're now ready to recover the individual mpox lineages that make up our sample. Freyja does this by using lineage-specific "barcodes" that match mutations to known to known mpox lineages based on the depth of coverage at each mutation site.

Whenever you run Freyja, it's important to first update the barcode set for the pathogen you're interested in. To do this for mpox, run the following command:

<Execute command="freyja update --pathogen MPX" />

Now, we're ready to demix our sample!

Run the following command to demix our sample:

<Execute command="freyja demix --pathogen MPX --variants variants.tsv --depths depths.tsv --output demixing_result.tsv" />