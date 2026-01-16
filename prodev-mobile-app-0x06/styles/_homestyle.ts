import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  searchFormGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  searchControlGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  searchFormText: {
    fontWeight: 700,
    fontSize: 39,
  },
  searchButton: {
    backgroundColor: "#34967C",
    height: 53,
  },
  filterGroup: {
    flexDirection: "row",
    columnGap: 16,
  },
  filterContainer: {
    width: 80,
    height: 72,
  },
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    height: 50,
    width: 120,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
export { styles };
