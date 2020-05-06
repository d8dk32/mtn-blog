<script>
    export let summits;
</script>

<style>
    table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    }
    th, td {
    padding: 5px;
    }
    th {
    text-align: left;
    }
    table {
    display: inline-block
    }
</style>

 <table>
   <tr>
     <th>Mountain</th>
     <th>Done</th> 
   </tr>
   {#each summits as summit}
   <tr>
    <td>{summit.name}</td>
    <td>{summit.done}</td>
   </tr>
   {/each}
 </table>