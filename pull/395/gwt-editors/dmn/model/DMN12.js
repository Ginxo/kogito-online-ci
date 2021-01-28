var DMN12_Module_Factory = function () {
  var DMN12 = {
    name: 'DMN12',
    defaultElementNamespaceURI: 'http:\/\/www.omg.org\/spec\/DMN\/20180521\/MODEL\/',
    dependencies: ['DMNDI12'],
    typeInfos: [{
        localName: 'TInvocation',
        typeName: 'tInvocation',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'expression',
            mixed: false,
            allowDom: false,
            typeInfo: '.TExpression',
            type: 'elementRef'
          }, {
            name: 'binding',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TBinding'
          }]
      }, {
        localName: 'TDMNElementReference',
        typeName: 'tDMNElementReference',
        propertyInfos: [{
            name: 'href',
            required: true,
            attributeName: {
              localPart: 'href'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TKnowledgeRequirement',
        typeName: 'tKnowledgeRequirement',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'requiredKnowledge',
            required: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TAssociation',
        typeName: 'tAssociation',
        baseTypeInfo: '.TArtifact',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'sourceRef',
            required: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'targetRef',
            required: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'associationDirection',
            typeInfo: '.TAssociationDirection',
            attributeName: {
              localPart: 'associationDirection'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TItemDefinition',
        typeName: 'tItemDefinition',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'typeRef',
            required: true
          }, {
            name: 'allowedValues',
            typeInfo: '.TUnaryTests'
          }, {
            name: 'itemComponent',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TItemDefinition'
          }, {
            name: 'typeLanguage',
            attributeName: {
              localPart: 'typeLanguage'
            },
            type: 'attribute'
          }, {
            name: 'isCollection',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isCollection'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TInformationItem',
        typeName: 'tInformationItem',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'typeRef',
            attributeName: {
              localPart: 'typeRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TLiteralExpression',
        typeName: 'tLiteralExpression',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'text',
            required: true
          }, {
            name: 'importedValues',
            required: true,
            typeInfo: '.TImportedValues'
          }, {
            name: 'expressionLanguage',
            attributeName: {
              localPart: 'expressionLanguage'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TDMNElement',
        typeName: 'tDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'description'
          }, {
            name: 'extensionElements',
            typeInfo: '.TDMNElement.ExtensionElements'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'label',
            attributeName: {
              localPart: 'label'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TDecision',
        typeName: 'tDecision',
        baseTypeInfo: '.TDRGElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'question'
          }, {
            name: 'allowedAnswers'
          }, {
            name: 'variable',
            typeInfo: '.TInformationItem'
          }, {
            name: 'informationRequirement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TInformationRequirement'
          }, {
            name: 'knowledgeRequirement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TKnowledgeRequirement'
          }, {
            name: 'authorityRequirement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TAuthorityRequirement'
          }, {
            name: 'supportedObjective',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'impactedPerformanceIndicator',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'decisionMaker',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'decisionOwner',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'usingProcess',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'usingTask',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'expression',
            mixed: false,
            allowDom: false,
            typeInfo: '.TExpression',
            type: 'elementRef'
          }]
      }, {
        localName: 'TRuleAnnotationClause',
        typeName: 'tRuleAnnotationClause',
        propertyInfos: [{
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TImport',
        typeName: 'tImport',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'namespace',
            required: true,
            attributeName: {
              localPart: 'namespace'
            },
            type: 'attribute'
          }, {
            name: 'locationURI',
            attributeName: {
              localPart: 'locationURI'
            },
            type: 'attribute'
          }, {
            name: 'importType',
            required: true,
            attributeName: {
              localPart: 'importType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TImportedValues',
        typeName: 'tImportedValues',
        baseTypeInfo: '.TImport',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'importedElement',
            required: true
          }, {
            name: 'expressionLanguage',
            attributeName: {
              localPart: 'expressionLanguage'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TKnowledgeSource',
        typeName: 'tKnowledgeSource',
        baseTypeInfo: '.TDRGElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'authorityRequirement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TAuthorityRequirement'
          }, {
            name: 'type'
          }, {
            name: 'owner',
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'locationURI',
            attributeName: {
              localPart: 'locationURI'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TArtifact',
        typeName: 'tArtifact',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TPerformanceIndicator',
        typeName: 'tPerformanceIndicator',
        baseTypeInfo: '.TBusinessContextElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'impactingDecision',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TRelation',
        typeName: 'tRelation',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'column',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TInformationItem'
          }, {
            name: 'row',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TList'
          }]
      }, {
        localName: 'TDecisionRule',
        typeName: 'tDecisionRule',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'inputEntry',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TUnaryTests'
          }, {
            name: 'outputEntry',
            required: true,
            collection: true,
            typeInfo: '.TLiteralExpression'
          }, {
            name: 'annotationEntry',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TRuleAnnotation'
          }]
      }, {
        localName: 'TRuleAnnotation',
        typeName: 'tRuleAnnotation',
        propertyInfos: [{
            name: 'text'
          }]
      }, {
        localName: 'TContext',
        typeName: 'tContext',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'contextEntry',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TContextEntry'
          }]
      }, {
        localName: 'TOrganizationUnit',
        typeName: 'tOrganizationUnit',
        baseTypeInfo: '.TBusinessContextElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'decisionMade',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'decisionOwned',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TBinding',
        typeName: 'tBinding',
        propertyInfos: [{
            name: 'parameter',
            required: true,
            typeInfo: '.TInformationItem'
          }, {
            name: 'expression',
            mixed: false,
            allowDom: false,
            typeInfo: '.TExpression',
            type: 'elementRef'
          }]
      }, {
        localName: 'TNamedElement',
        typeName: 'tNamedElement',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TExpression',
        typeName: 'tExpression',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'typeRef',
            attributeName: {
              localPart: 'typeRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TDefinitions',
        typeName: 'tDefinitions',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: '_import',
            minOccurs: 0,
            collection: true,
            elementName: 'import',
            typeInfo: '.TImport'
          }, {
            name: 'itemDefinition',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TItemDefinition'
          }, {
            name: 'drgElement',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            typeInfo: '.TDRGElement',
            type: 'elementRef'
          }, {
            name: 'artifact',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            typeInfo: '.TArtifact',
            type: 'elementRef'
          }, {
            name: 'elementCollection',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TElementCollection'
          }, {
            name: 'businessContextElement',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            typeInfo: '.TBusinessContextElement',
            type: 'elementRef'
          }, {
            name: 'dmndi',
            elementName: {
              localPart: 'DMNDI',
              namespaceURI: 'http:\/\/www.omg.org\/spec\/DMN\/20180521\/DMNDI\/'
            },
            typeInfo: 'DMNDI12.DMNDI'
          }, {
            name: 'expressionLanguage',
            attributeName: {
              localPart: 'expressionLanguage'
            },
            type: 'attribute'
          }, {
            name: 'typeLanguage',
            attributeName: {
              localPart: 'typeLanguage'
            },
            type: 'attribute'
          }, {
            name: 'namespace',
            required: true,
            attributeName: {
              localPart: 'namespace'
            },
            type: 'attribute'
          }, {
            name: 'exporter',
            attributeName: {
              localPart: 'exporter'
            },
            type: 'attribute'
          }, {
            name: 'exporterVersion',
            attributeName: {
              localPart: 'exporterVersion'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TBusinessContextElement',
        typeName: 'tBusinessContextElement',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'uri',
            attributeName: {
              localPart: 'URI'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TFunctionDefinition',
        typeName: 'tFunctionDefinition',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'formalParameter',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TInformationItem'
          }, {
            name: 'expression',
            mixed: false,
            allowDom: false,
            typeInfo: '.TExpression',
            type: 'elementRef'
          }, {
            name: 'kind',
            typeInfo: '.TFunctionKind',
            attributeName: {
              localPart: 'kind'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TInvocable',
        typeName: 'tInvocable',
        baseTypeInfo: '.TDRGElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'variable',
            typeInfo: '.TInformationItem'
          }]
      }, {
        localName: 'TDecisionService',
        typeName: 'tDecisionService',
        baseTypeInfo: '.TInvocable',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'outputDecision',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'encapsulatedDecision',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'inputDecision',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'inputData',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TInputClause',
        typeName: 'tInputClause',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'inputExpression',
            required: true,
            typeInfo: '.TLiteralExpression'
          }, {
            name: 'inputValues',
            typeInfo: '.TUnaryTests'
          }]
      }, {
        localName: 'TInputData',
        typeName: 'tInputData',
        baseTypeInfo: '.TDRGElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'variable',
            typeInfo: '.TInformationItem'
          }]
      }, {
        localName: 'TOutputClause',
        typeName: 'tOutputClause',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'outputValues',
            typeInfo: '.TUnaryTests'
          }, {
            name: 'defaultOutputEntry',
            typeInfo: '.TLiteralExpression'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'typeRef',
            attributeName: {
              localPart: 'typeRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TContextEntry',
        typeName: 'tContextEntry',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'variable',
            typeInfo: '.TInformationItem'
          }, {
            name: 'expression',
            required: true,
            mixed: false,
            allowDom: false,
            typeInfo: '.TExpression',
            type: 'elementRef'
          }]
      }, {
        localName: 'TAuthorityRequirement',
        typeName: 'tAuthorityRequirement',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'requiredDecision',
            required: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'requiredInput',
            required: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'requiredAuthority',
            required: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TUnaryTests',
        typeName: 'tUnaryTests',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'text',
            required: true
          }, {
            name: 'expressionLanguage',
            attributeName: {
              localPart: 'expressionLanguage'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TDMNElement.ExtensionElements',
        typeName: null,
        propertyInfos: [{
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'TDRGElement',
        typeName: 'tDRGElement',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TDecisionTable',
        typeName: 'tDecisionTable',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'input',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TInputClause'
          }, {
            name: 'output',
            required: true,
            collection: true,
            typeInfo: '.TOutputClause'
          }, {
            name: 'annotation',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TRuleAnnotationClause'
          }, {
            name: 'rule',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDecisionRule'
          }, {
            name: 'hitPolicy',
            typeInfo: '.THitPolicy',
            attributeName: {
              localPart: 'hitPolicy'
            },
            type: 'attribute'
          }, {
            name: 'aggregation',
            typeInfo: '.TBuiltinAggregator',
            attributeName: {
              localPart: 'aggregation'
            },
            type: 'attribute'
          }, {
            name: 'preferredOrientation',
            typeInfo: '.TDecisionTableOrientation',
            attributeName: {
              localPart: 'preferredOrientation'
            },
            type: 'attribute'
          }, {
            name: 'outputLabel',
            attributeName: {
              localPart: 'outputLabel'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TList',
        typeName: 'tList',
        baseTypeInfo: '.TExpression',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'expression',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            typeInfo: '.TExpression',
            type: 'elementRef'
          }]
      }, {
        localName: 'TElementCollection',
        typeName: 'tElementCollection',
        baseTypeInfo: '.TNamedElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'drgElement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TBusinessKnowledgeModel',
        typeName: 'tBusinessKnowledgeModel',
        baseTypeInfo: '.TInvocable',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'encapsulatedLogic',
            typeInfo: '.TFunctionDefinition'
          }, {
            name: 'knowledgeRequirement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TKnowledgeRequirement'
          }, {
            name: 'authorityRequirement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TAuthorityRequirement'
          }]
      }, {
        localName: 'TInformationRequirement',
        typeName: 'tInformationRequirement',
        baseTypeInfo: '.TDMNElement',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'requiredDecision',
            required: true,
            typeInfo: '.TDMNElementReference'
          }, {
            name: 'requiredInput',
            required: true,
            typeInfo: '.TDMNElementReference'
          }]
      }, {
        localName: 'TTextAnnotation',
        typeName: 'tTextAnnotation',
        baseTypeInfo: '.TArtifact',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'text'
          }, {
            name: 'textFormat',
            attributeName: {
              localPart: 'textFormat'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TDecisionTableOrientation',
        values: ['Rule-as-Row', 'Rule-as-Column', 'CrossTable']
      }, {
        type: 'enumInfo',
        localName: 'TFunctionKind',
        values: ['FEEL', 'Java', 'PMML']
      }, {
        type: 'enumInfo',
        localName: 'TBuiltinAggregator',
        values: ['SUM', 'COUNT', 'MIN', 'MAX']
      }, {
        type: 'enumInfo',
        localName: 'THitPolicy',
        values: ['UNIQUE', 'FIRST', 'PRIORITY', 'ANY', 'COLLECT', 'RULE ORDER', 'OUTPUT ORDER']
      }, {
        type: 'enumInfo',
        localName: 'TAssociationDirection',
        values: ['None', 'One', 'Both']
      }],
    elementInfos: [{
        typeInfo: '.TDRGElement',
        elementName: 'drgElement',
        substitutionHead: 'namedElement'
      }, {
        typeInfo: '.TDecisionService',
        elementName: 'decisionService',
        substitutionHead: 'invocable'
      }, {
        typeInfo: '.TNamedElement',
        elementName: 'namedElement',
        substitutionHead: 'DMNElement'
      }, {
        typeInfo: '.TInputData',
        elementName: 'inputData',
        substitutionHead: 'drgElement'
      }, {
        typeInfo: '.TAssociation',
        elementName: 'association',
        substitutionHead: 'artifact'
      }, {
        typeInfo: '.TFunctionDefinition',
        elementName: 'functionDefinition',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TRelation',
        elementName: 'relation',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TInvocation',
        elementName: 'invocation',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TDefinitions',
        elementName: 'definitions',
        substitutionHead: 'namedElement'
      }, {
        typeInfo: '.TInformationRequirement',
        elementName: 'informationRequirement',
        substitutionHead: 'DMNElement'
      }, {
        typeInfo: '.TArtifact',
        elementName: 'artifact',
        substitutionHead: 'DMNElement'
      }, {
        typeInfo: '.TExpression',
        elementName: 'expression'
      }, {
        typeInfo: '.TList',
        elementName: 'list',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TDecision',
        elementName: 'decision',
        substitutionHead: 'drgElement'
      }, {
        typeInfo: '.TPerformanceIndicator',
        elementName: 'performanceIndicator',
        substitutionHead: 'businessContextElement'
      }, {
        typeInfo: '.TBusinessKnowledgeModel',
        elementName: 'businessKnowledgeModel',
        substitutionHead: 'invocable'
      }, {
        typeInfo: '.TDMNElement',
        elementName: 'DMNElement'
      }, {
        typeInfo: '.TInformationItem',
        elementName: 'informationItem',
        substitutionHead: 'namedElement'
      }, {
        typeInfo: '.TInvocable',
        elementName: 'invocable',
        substitutionHead: 'drgElement'
      }, {
        typeInfo: '.TLiteralExpression',
        elementName: 'literalExpression',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TDecisionTable',
        elementName: 'decisionTable',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TContextEntry',
        elementName: 'contextEntry',
        substitutionHead: 'DMNElement'
      }, {
        typeInfo: '.TKnowledgeRequirement',
        elementName: 'knowledgeRequirement',
        substitutionHead: 'DMNElement'
      }, {
        typeInfo: '.TElementCollection',
        elementName: 'elementCollection',
        substitutionHead: 'namedElement'
      }, {
        typeInfo: '.TTextAnnotation',
        elementName: 'textAnnotation',
        substitutionHead: 'artifact'
      }, {
        typeInfo: '.TContext',
        elementName: 'context',
        substitutionHead: 'expression'
      }, {
        typeInfo: '.TOrganizationUnit',
        elementName: 'organizationUnit',
        substitutionHead: 'businessContextElement'
      }, {
        typeInfo: '.TAuthorityRequirement',
        elementName: 'authorityRequirement',
        substitutionHead: 'DMNElement'
      }, {
        typeInfo: '.TKnowledgeSource',
        elementName: 'knowledgeSource',
        substitutionHead: 'drgElement'
      }, {
        typeInfo: '.TImport',
        elementName: 'import',
        substitutionHead: 'namedElement'
      }, {
        typeInfo: '.TBusinessContextElement',
        elementName: 'businessContextElement'
      }, {
        typeInfo: '.TItemDefinition',
        elementName: 'itemDefinition',
        substitutionHead: 'namedElement'
      }]
  };
  return {
    DMN12: DMN12
  };
};
if (typeof define === 'function' && define.amd) {
  define([], DMN12_Module_Factory);
}
else {
  var DMN12_Module = DMN12_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.DMN12 = DMN12_Module.DMN12;
  }
  else {
    var DMN12 = DMN12_Module.DMN12;
  }
}