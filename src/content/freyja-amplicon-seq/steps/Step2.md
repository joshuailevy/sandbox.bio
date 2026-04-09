<script>
import Execute from "$components/Execute.svelte";
</script>

From the IGV tracks, you'll notice that the Amplicon PCR primers overlap with the ends of the sample reads. These are designed to bind to relatively conserved regions of the genome, allowing for the amplification of the target region of interest. However, this means that these primers will need to be removed from the reads so we can explore the actual diversity of the sample.

Luckily, `ivar` has built-in functionality to do just that! 

Run the following command to trim the primers from the reads:

<Execute command="ivar trim -i sample_1.bam -b MPXV_primers_v1.2.bed -p trimmed" />

Note the following options:

- `-i sample_1.bam` tells `ivar` that we want to trim the primers from the file `sample_1.bam`
- `-b MPXV_primers_v1.2.bed` tells `ivar` that we want to use the file `MPXV_primers_v1.2.bed` as our primer BED file
- `-p trimmed` tells `ivar` that we want to output the trimmed reads with the **p**refix "trimmed", so the resulting file will be called `trimmed.bam`
