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
    display: inline-block;
    margin: 3px
    }
</style>

<table>
  <tr>
    <th>Mountain</th>
    <th>Done</th> 
  </tr>
  {#each summits as summit}
  <tr>
    <td> {@html summit.name} </td>
    <td> {@html summit.done} </td>
  </tr>
  {/each}
</table>
