# Evidence Provenance Confidence/Context (EPC) Working Group

This is the project coordination repository of the Translator *Evidence Provenance Confidence (& possibly Context) Modelling Working Group*. The [EPC Working Group Charter](https://docs.google.com/document/d/1hV03ewzQbEfja9emf0foIQU_t9kuJp_McxhWVPbM4CE) defines the group's mission and an [EPC Issue Staging and Discussion](https://docs.google.com/document/d/11HuUMw3u9uf1RPa3FbFgSgbY47hDxAFWywbCYVxUMLI/edit#heading=h.prvdzh67lgo) defines and elaborates the technical scope of concerns.

## Meetings

- [WG Running Agenda](https://docs.google.com/document/d/1CsDhRYOCL1FJMDntdSNkuXZa00IXYjnyLouyLXpb8M4)
- September 2020 Relay Provenance Session ([slides](https://docs.google.com/presentation/d/1NzpnX-ZafU72mwcDt4qsRsTlT97cl0EsjzS1CqmgmbY), [notes](https://docs.google.com/document/d/1-5gj4ynmeAep1TVS7QRmEZlbBoY465Buqtju5TxEZ1E))

# Resources

- [Translator Gdrive folder for EPC WG](https://drive.google.com/drive/u/0/folders/1LSNkQ6iqKfVdjirjcCW-0sRj83qCY6Xw)

## Requirements Gathering

- [EPC Modelling Requirements Collection](https://docs.google.com/spreadsheets/d/1WDkqNMhy7aer_3-JB4SCVhp1MZeFYZjCnYuRCnoZguo)
- [EPC Modelling Notes](https://docs.google.com/document/d/13ItZjnM7A97z0EABrp9S3hNb48DlTP2QgMOJAeEabsw/edit#heading=h.bhjl4onb1tvj)

## Third Party Models

- July SEPIO Presentation ([slides](https://docs.google.com/presentation/d/1W_VWV5oMplK9Wz2XBXdZNLHPKcmAC3CR-3P6JwYAJMw/edit#slide=id.g7393cc5b77_0_479))

## Biolink Model Integration

For convenience of access, this project has a dedicated EPPC fork of the Biolink Model injected into this project as a Git `submodule`  in the *biolink* folder of the project.  The basic idea here is that we will make judicious EPCC revisions to this forked copy of the Biolink model,f or pull request merging into the main Biolink Model, once those changes are ready to be used by the Translator community.

- Initial [Pull Request for OBAN/SEPIO-inspired Biolink Model revisions](https://github.com/NCATSTranslator/epcc-biolink-model-additions/pull/2)

## TRAPI Integration

Discussions about EPC integration with the Translator Reasoner Application Programming Interface (TRAPI) are ongoing. Progress (as of December 15th, 2020) is documented in a set of [EPC modelling design notes](https://docs.google.com/document/d/13ItZjnM7A97z0EABrp9S3hNb48DlTP2QgMOJAeEabsw/edit#heading=h.oyjoziz9mqzq) and [data encoding examples](https://github.com/NCATSTranslator/Evidence-Provenance-Confidence-Working-Group/blob/master/Attribute_object_examples.yaml).

### General TRAPI Design Issues

There are several somewhat independent TRAPI design issues relating to EPC data representations, only the first of which is near resolution (as of December 15th):

1. Proposed revisions of the Attribute data model schema of TRAPI is currently taken as an initial design iteration to enhance support for EPC annotations on edges (and nodes?) published from Knowledge Providers (KP).  A  core design consideration is a clear separation of concerns between the ‘value’ of an attribute versus   its context of usage (or specific ‘relationship’ to the edge (or  node) it documents. The proposed Attribute model revision also  distinguishes between the original source's semantic labelling of the Attribute values and relationship, versus the Translator-specific semantic mapping of the value type and relationship. This is the main design issue discussed in the aforementioned December 15, 2020 meeting notes  [here](https://docs.google.com/document/d/13ItZjnM7A97z0EABrp9S3hNb48DlTP2QgMOJAeEabsw/edit#heading=h.oyjoziz9mqzq) and [here](https://github.com/NCATSTranslator/Evidence-Provenance-Confidence-Working-Group/blob/master/Attribute_object_examples.yaml).

2. The final nomenclature for the TRAPI Attribute schema properties related to design issue#1 above remains to finalized.

3. The concern about whether or not TRAPI Attributes require human readable names is to be decided (such Attribute names could be defined but optional).  This relates mainly to  the  question about whether or not TRAPI JSON is mainly for programmatic versus human consumption, or how performant ontology lookup operations  may be.

4. Encoding EPC metadata inside TRAPI Edge Attributes is the current TRAPI standard, but there may be some scientific or technical use cases that may support the   idea of locating certain specific EPC metadata as direct Edge properties.

5.  Could instances of TRAPI Attribute schema be permitted to contain “embedded"  attributes and  how might these be implemented?


## Use Cases

1. A user conducts an initial Translator ARS query which returns a non-empty knowledge graph result. They wish to view all of the available EPC information associated with a specific edge assertion in the graph, so triggers a second the ARS to retrieve all said EPC information in a second query to the graph, using some suitable edge identifier.

    a) Variant of 1: user provides specific EPCC information filters to constrain the information returned to specific types.
    b) Variant of 1 and 1a): the EPCC information returned default to 'shallow', 'breadth first', scope, so the user may ask for additional details about one or more specific components of the information returned (e.g. access details about underlying "evidence information objects" cited within the EPC).


