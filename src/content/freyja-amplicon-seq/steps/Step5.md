<script>
import Execute from "$components/Execute.svelte";
</script>

We're now ready to recover the individual mpox lineages that make up our sample. Freyja does this by using lineage-specific "barcodes" that match mutations to known to known mpox lineages based on the depth of coverage at each mutation site.

Whenever you run Freyja, it's important to first update the barcode set for the pathogen you're interested in. To do this for mpox, run the following command:

<Execute command="freyja update --pathogen MPX" />

Now, we're ready to demix our sample!

Run the following command to demix our sample:

<Execute command="freyja demix --pathogen MPX variants.tsv depths.tsv --output demixing_result.tsv" />

Here, we specify the pathogen we're analyzing using the `--pathogen` flag (see <Link href="https://github.com/bochen-lab/Freyja/blob/main/docs/pathogens.md">here</Link> for a list of supported pathogens), and the input files for the variants and depths files as positional arguments.

Let's take a look at the output file, `demixing_result.tsv`:
<Execute command="cat demixing_result.tsv" />

You'll see the rows `lineages` and `abundances`. These contain the lineages detected in the sample, along with their relative abundances. In addition, the `resid` row indicates the residual of the solving step (lower is better). Finally, `coverage` shows the percentage of the genome that is covered in the sample by 10 or more reads. In this case, our coverage is 4.5%, which is relatively low. This is due to the fact that the primer scheme we're using only targets selected informative regions of the genome, and since Mpox has such a large genome, we don't see coverage outside of these informative sites.