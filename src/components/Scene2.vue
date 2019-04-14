<!-- <template>
  <div id="bbb">
    <input type="text" v-model="keyword">
    <table>
      <tr v-for="(item) in items" :key="item.id">
        <td v-text="item.id"></td>
        <td v-text="item.name"></td>
        <td v-text="item.email"></td>
      </tr>
    </table>
  </div>
</template>
 -->

<ul id="example-1">
  <li v-for="item in filteredUsers">
    {{ item.message }}
  </li>
</ul>
